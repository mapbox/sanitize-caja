## 0.1.4

* Removes the use of octal literals in strict mode, which were breaking downstream tools. They are replaced with decimal literals of the same values.

## 0.1.3

* **SECURITY RELEASE**: Increased vigilance around `<iframe>` input: instead of reducing
  iframes attribute-by-attribute and allowing them to have contents,
  remove their contents entirely from the page by changing their
  eflags value to 0.

## 0.1.1

* Updated `package.json` with correct repository URL
* Cleaned up tests
