param(
  [int]$Port = 4174
)

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$MimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
}

$Listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$Listener.Start()
Write-Host "Quiroz Academy dev server: http://127.0.0.1:$Port/"

try {
  while ($true) {
    $Client = $Listener.AcceptTcpClient()
    $Stream = $Client.GetStream()
    $Stream.ReadTimeout = 1000
    $Buffer = [byte[]]::new(4096)
    $RequestText = ""

    $Waited = 0
    while (-not $Stream.DataAvailable -and $Waited -lt 200) {
      Start-Sleep -Milliseconds 20
      $Waited += 20
    }

    if (-not $Stream.DataAvailable) {
      $Stream.Close()
      $Client.Close()
      continue
    }

    try {
      while ($true) {
        $Read = $Stream.Read($Buffer, 0, $Buffer.Length)
        if ($Read -le 0) {
          break
        }

        $RequestText += [System.Text.Encoding]::ASCII.GetString($Buffer, 0, $Read)
        if ($RequestText.Contains("`r`n`r`n")) {
          break
        }
      }
    } catch {
      $Stream.Close()
      $Client.Close()
      continue
    }

    $RequestLine = ($RequestText -split "`r`n")[0]
    if ([string]::IsNullOrWhiteSpace($RequestLine)) {
      $Stream.Close()
      $Client.Close()
      continue
    }

    $UrlPath = "/"
    if ($RequestLine -match "^\w+\s+([^\s]+)") {
      $UrlPath = $Matches[1].Split("?")[0]
    }

    $RequestPath = [Uri]::UnescapeDataString($UrlPath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($RequestPath)) {
      $RequestPath = "index.html"
    }

    $FullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $RequestPath))
    $IsInsideRoot = $FullPath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)
    $Status = "200 OK"

    if (-not $IsInsideRoot -or -not [System.IO.File]::Exists($FullPath)) {
      $Status = "404 Not Found"
      $ContentType = "text/plain; charset=utf-8"
      $Body = [System.Text.Encoding]::UTF8.GetBytes("Not found")
    } else {
      $Extension = [System.IO.Path]::GetExtension($FullPath).ToLowerInvariant()
      $ContentType = $MimeTypes[$Extension]
      if (-not $ContentType) {
        $ContentType = "application/octet-stream"
      }
      $Body = [System.IO.File]::ReadAllBytes($FullPath)
    }

    $Header = "HTTP/1.1 $Status`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
    $HeaderBytes = [System.Text.Encoding]::ASCII.GetBytes($Header)
    $Stream.Write($HeaderBytes, 0, $HeaderBytes.Length)
    $Stream.Write($Body, 0, $Body.Length)
    $Stream.Close()
    $Client.Close()
  }
} finally {
  $Listener.Stop()
}
