Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('C:\Users\User\Desktop\Self-Publishing-consultant\Substantive-Editing-Services-UAE-SPC-Blog.docx')
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlStr = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()
$xml = [xml]$xmlStr
$text = $xml.SelectNodes('//*[local-name()="t"]') | % { $_.InnerText }
$text -join "`n" | Out-File -FilePath 'C:\Users\User\Desktop\Self-Publishing-consultant\blog_text.txt' -Encoding utf8
