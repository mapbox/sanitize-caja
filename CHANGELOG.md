## 0.1.3

* **SECURITY RELEASE**: Increased vigilance around `<iframe>` input: instead of reducing
  iframes attribute-by-attribute and allowing them to have contents,
  remove their contents entirely from the page by changing their
  eflags value to 0.

## 0.1.1

* Updated `package.json` with correct repository URL
* Cleaned up tests
