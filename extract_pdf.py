from pathlib import Path
from pypdf import PdfReader
pdf = PdfReader(Path('Avaliacao comercial site unovitta.pdf'))
for i, page in enumerate(pdf.pages, start=1):
    text = page.extract_text()
    print('--- PAGE', i, '---')
    if text:
        print(text)
    else:
        print('[no text extracted]')
