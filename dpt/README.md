# DrivingPracticeTests.com

Free DMV practice tests for all states. Currently featuring California with comprehensive test coverage.

## Site Structure

### Main Pages
- `index.html` - Homepage with state selection
- `state-california.html` - California DMV test hub
- `resources.html` - Study guides and test resources
- `contact.html` - Contact information
- `terms.html` - Terms and conditions
- `privacy-policy.html` - Privacy policy
- `editorial-policy.html` - Editorial standards

### California Practice Tests
Located in `california-tests-interactive-txt-html/`:
- `california-dmv-practice-test-1.html` - 25 questions
- `california-dmv-practice-test-2.html` - 25 questions  
- `california-dmv-practice-test-3.html` - 25 questions
- `california-dmv-practice-test-4.html` - 25 questions
- `california-dmv-practice-test-5.html` - 25 questions
- `california-dmv-quick-test.html` - 25 essential questions

### Mini Tests
Located in `california-mini-tests-all/`:
- `california-mini-test-1.html` - 12 questions
- `california-mini-test-2.html` - 12 questions
- `california-mini-test-3.html` - 12 questions
- `california-mini-test-4.html` - 12 questions

## Features

### SEO Optimized
- Complete meta tags and Open Graph data
- Structured data (JSON-LD) for quizzes and pages
- Optimized sitemap.xml and robots.txt
- Canonical URLs and proper redirects

### ADA Compliant
- Skip links for keyboard navigation
- ARIA labels and semantic HTML
- Screen reader compatible
- Focus indicators and proper contrast

### Interactive Quizzes
- One question at a time format
- Instant explanations after each answer
- Progress tracking and scoring
- Mobile-responsive design

## Technical Stack
- Vanilla HTML, CSS, JavaScript
- No external dependencies
- Lightweight and fast loading
- Mobile-first responsive design

## Deployment
1. Upload all files maintaining directory structure
2. Ensure `assets/` folder contains CSS, JS, and images
3. Submit sitemap.xml to Google Search Console
4. Test all quiz functionality and navigation

## Adding New Test Pages

### Using the Template
Use `california-dmv-practice-test-1.html` as your template for all new test pages.

### Step-by-Step Instructions

1. **Copy the template file**
   ```bash
   cp california-tests-interactive-txt-html/california-dmv-practice-test-1.html new-test-file.html
   ```

2. **Update SEO metadata** (in `<head>` section):
   - Change `<title>` to reflect new test name
   - Update `meta description` with new test details
   - Update `meta keywords` for the new test
   - Change `og:title`, `og:description`, `og:url` in Open Graph tags
   - Update `twitter:title`, `twitter:description` in Twitter tags
   - Change `canonical` URL to new test URL
   - Update JSON-LD structured data `name`, `description`, and `url`

3. **Update page content**:
   - Change `<h1>` title to new test name
   - Update subtitle description if needed

4. **Replace question data**:
   - Locate the `DATA = [` array in the JavaScript section
   - Replace all question objects with new questions
   - Each question object needs: `q`, `options`, `correct`, `expl`
   - Ensure `correct` index matches the right answer (0-based)

5. **Update file paths** (if in different directory):
   - Check CSS link: `href="../assets/css/quiz.css"`
   - Check JS link: `src="../assets/js/quiz.js"`
   - Check favicon: `href="../assets/img/favicon.ico"`
   - Update image paths in Open Graph tags

6. **Test the new page**:
   - Verify all questions load correctly
   - Test answer selection and explanations
   - Check progress bar functionality
   - Validate SEO metadata with tools

### Question Data Format
```javascript
{
  q: "Your question text here?",
  options: [
    "First answer option",
    "Second answer option", 
    "Third answer option"
  ],
  correct: 1, // Index of correct answer (0, 1, or 2)
  expl: "Explanation of why this answer is correct."
}
```

### Quiz Initialization
After defining your DATA array, initialize the quiz with:
```javascript
initQuiz(DATA, 'uniqueQuizId');
```

**Parameters:**
- `DATA` - Your array of question objects
- `'uniqueQuizId'` - Unique identifier for the quiz (used for progress tracking)

**Examples:**
- Full tests: `initQuiz(DATA, 'quiz1');`, `initQuiz(DATA, 'quiz2');`
- Mini tests: `initQuiz(DATA, 'miniQuiz1');`, `initQuiz(DATA, 'miniQuiz2');`
- Quick tests: `initQuiz(DATA, 'quickTest');`

**Important:** Each test page must have a unique quiz ID to prevent progress conflicts.

### Adding New States
1. Create new state page following `state-california.html` pattern
2. Create test directory structure (e.g., `texas-tests-interactive-txt-html/`)
3. Add test files using the template process above
4. Update sitemap.xml with new URLs
5. Update homepage state grid with new state link
6. Update navigation menus across the site