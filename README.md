# PromptWise: AI Learning Prompt Generator
#### Description: 

PromptWise is an innovative web application designed to enhance the learning experience with AI by generating structured, educational prompts. This project addresses a common challenge in AI-assisted learning: formulating effective questions that maximize learning outcomes.

## Project Purpose and Functionality

The application serves as a bridge between learners and AI assistants by generating well-structured, educational prompts. Unlike simple question-asking, PromptWise creates comprehensive learning prompts that include real-world examples, analogies, and follow-up questions, ensuring a deeper understanding of any topic.

## Technical Overview

### Core Files and Their Functions

#### `app.py`
The Flask application's core, handling:
- Route management for the single-page application
- Integration with the Gemini AI API via the `gemini_api.py` module
- Error handling and template rendering
- POST/GET request processing for prompt generation

I chose Flask for its lightweight nature and straightforward integration with Python-based AI services. The simple routing structure (single route with GET/POST methods) keeps the application focused and maintainable.

#### `gemini_api.py`
Manages all AI-related functionality:
- Configuration of Google's Gemini AI service
- Prompt template definition and processing
- API response handling
- Environmental variable management

The decision to use Gemini AI was based on its superior performance for educational content and cost-effectiveness. The prompt template was carefully crafted to ensure consistent, high-quality educational outputs.

#### `templates/index.html`
The frontend interface, featuring:
- Semantic HTML structure for accessibility
- Responsive design elements
- Dynamic content rendering
- Form handling for prompt generation

I deliberately chose a single-page design to maintain simplicity and focus. The interface includes subtle animations and transitions to enhance user experience without compromising functionality.

#### `static/styles.css`
Implements the visual design:
- Custom CSS variables for consistent theming
- Mobile-first responsive design
- Dark mode optimization
- Accessibility considerations
- Comprehensive media queries

The dark mode interface was chosen to reduce eye strain during extended use, while maintaining high contrast ratios for accessibility. The responsive design ensures seamless functionality across all device sizes.

#### `static/script.js`
Handles client-side functionality:
- Form validation
- Clipboard operations
- Session storage management
- User feedback mechanisms
- Error handling

The JavaScript implementation focuses on enhancing user experience while maintaining graceful degradation for browsers with limited functionality.

## Design Decisions and Challenges

### 1. Architecture Choices
- **Single Page Application**: Chosen for simplicity and focused user experience
- **Flask Backend**: Selected for its lightweight nature and excellent Python ecosystem compatibility
- **Gemini AI Integration**: Preferred for its superior educational content generation and cost-effectiveness

### 2. User Interface Design
- **Dark Mode**: Implemented to reduce eye strain and provide a modern aesthetic
- **Responsive Layout**: Mobile-first approach ensures consistent experience across devices
- **Accessibility**: High contrast ratios, semantic HTML, and ARIA labels for inclusive design

### 3. Technical Challenges
- **Prompt Engineering**: Significant effort went into optimizing the prompt template for consistent, high-quality results
- **Error Handling**: Comprehensive error management for API failures and network issues
- **Cross-Browser Compatibility**: Ensuring consistent clipboard functionality across different browsers

## Security Considerations

- Environment variables for API key management
- Input sanitization to prevent injection attacks
- CSRF protection through Flask's built-in security
- Secure clipboard operations with proper error handling

## Installation and Setup

1. Clone the repository:
2. Create and activate virtual environment:
3. Install dependencies
4. Set up environment variables
5. Run the application:

## Future Enhancements

1. **User Accounts and History**
   - Save favorite prompts
   - Track learning progress
   - Personalized suggestions

2. **Advanced Customization**
   - Multiple prompt templates
   - Language preferences
   - Difficulty levels

3. **Analytics Integration**
   - Usage tracking
   - Prompt effectiveness metrics
   - Learning pattern analysis

## Credits and Acknowledgments

- Flask web framework
- Google Gemini AI
- CS50 course and staff
- Sora font from Google Fonts

## Author
Máté Dunai
CS50 Final Project, Spring 2025

## License
This project is licensed under the MIT License.
