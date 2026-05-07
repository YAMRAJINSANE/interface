from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.line_stack = []

    def handle_starttag(self, tag, attrs):
        if tag not in ['meta', 'link', 'br', 'hr', 'img', 'input', 'col', 'source', '!doctype']:
            self.stack.append(tag)
            self.line_stack.append((tag, self.getpos()[0]))

    def handle_endtag(self, tag):
        if tag in ['meta', 'link', 'br', 'hr', 'img', 'input', 'col', 'source', '!doctype']:
            return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
            self.line_stack.pop()
        else:
            print(f'Mismatched tag: <{tag}> at line {self.getpos()[0]}, expected <{self.stack[-1] if self.stack else "none"}>')

parser = MyHTMLParser()
with open(r'c:\Users\mkuma\Desktop\YESOFFICER\ENGLISH\mme\greenmark_case_study.html', 'r', encoding='utf-8') as f:
    parser.feed(f.read())
print('Unclosed tags:', parser.line_stack)
