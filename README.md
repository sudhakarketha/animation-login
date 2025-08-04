# Animated Login Page

A modern, animated login page built with Python Flask, featuring smooth animations, responsive design, and interactive elements.

## Features

- ✨ **Smooth Animations**: Floating background shapes, slide-in effects, and interactive hover animations
- 🎨 **Modern Design**: Glassmorphism effects with backdrop blur and gradient backgrounds
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🔒 **Secure**: Password hashing and session management
- ⚡ **Interactive**: Real-time form validation, loading states, and notifications
- 🎯 **User Experience**: Smooth transitions, ripple effects, and keyboard navigation

## Demo Credentials

- **Username**: `admin`
- **Password**: `password123`

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd animation-login
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

```
animation-login/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/
│   ├── login.html        # Login page template
│   └── dashboard.html    # Dashboard page template
└── static/
    ├── style.css         # Login page styles
    ├── dashboard.css     # Dashboard styles
    └── script.js         # Interactive JavaScript
```

## Technologies Used

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with animations and responsive design
- **Icons**: Font Awesome 6.0
- **Security**: Werkzeug password hashing

## Key Features Explained

### 1. Background Animations
- Floating geometric shapes with parallax effect
- Smooth rotation and opacity transitions
- Mouse-responsive movement

### 2. Form Interactions
- Real-time input validation
- Password visibility toggle
- Loading states with spinner animation
- Success/error notifications

### 3. Visual Effects
- Glassmorphism design with backdrop blur
- Gradient backgrounds and borders
- Ripple effects on button clicks
- Smooth hover transitions

### 4. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## Customization

### Changing Colors
Edit the CSS variables in `static/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #4CAF50;
    --error-color: #f44336;
}
```

### Adding New Animations
Add custom keyframes in the CSS files:
```css
@keyframes customAnimation {
    0% { /* initial state */ }
    100% { /* final state */ }
}
```

### Modifying User Credentials
Edit the `users` dictionary in `app.py`:
```python
users = {
    'your_username': generate_password_hash('your_password')
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

If you encounter any issues or have questions, please open an issue on the repository.

---

**Enjoy the animated login experience! 🚀**