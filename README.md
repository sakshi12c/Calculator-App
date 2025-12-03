Features

Basic arithmetic operations (addition, subtraction, multiplication, division)
Decimal number support
Backspace/delete functionality to correct input
Clear button to reset the calculator
Responsive display that adjusts to long numbers
Color-coded buttons for easy identification
Chain calculations support
Division by zero protection

Files
Calculator.html
Main HTML structure containing:

Calculator container with display screen
4x4 grid layout for buttons
Number buttons (0-9)
Operation buttons (+, -, ×, ÷)
Special function buttons (C, DEL, ., =)

Calculator.js
Core calculation logic including:

Number input handling
Operator selection and chaining
Decimal point validation
Backspace character deletion
Calculation engine for all operations
State management for multi-step calculations
Display reset logic

Calculator.css
Complete styling including:

Centered calculator layout with shadow effects
Dark display screen with right-aligned text
Color-coded button system:

Gray for numbers
Orange for operators
Red for clear
Green for equals


Grid-based button layout
Responsive design with proper spacing
Hover and transition effects

How to Use
Basic Operations

Open Calculator.html in a web browser
Click number buttons to input numbers
Click an operator button (+, -, ×, ÷)
Enter the second number
Press "=" to see the result

Additional Functions

C (Clear): Resets the calculator to initial state
DEL (Backspace): Removes the last entered digit
. (Decimal): Adds a decimal point (prevents multiple decimals)
0 Button: Spans two columns for easier access

Chain Calculations
The calculator supports chain calculations:

Example: 5 + 3 + 2 will display 8 after the second +, then 10 after =

Button Layout
[ C  ] [ ÷ ] [ × ] [ - ]
[ 7  ] [ 8 ] [ 9 ] [ + ]
[ 4  ] [ 5 ] [ 6 ] [ . ]
[ 1  ] [ 2 ] [ 3 ] [DEL]
[  0    0  ] [  =    = ]
Technical Implementation
State Management
The calculator maintains four key states:

firstNumber: The first operand in the calculation
secondNumber: The second operand in the calculation
operation: The current operation (add, subtract, multiply, divide)
shouldResetDisplay: Flag to determine if display should be cleared on next input

Calculation Flow

User enters first number
User selects an operator
First number is stored, display prepared for second number
User enters second number
User presses "=" or another operator
Calculation is performed and result displayed
Result becomes first number for next calculation (if continuing)

Division by Zero
The calculator handles division by zero by returning 0 instead of Infinity or Error.
Installation

Download all three files (Calculator.html, Calculator.js, Calculator.css)
Place them in the same directory
Open Calculator.html in any modern web browser

Customization
Modifying Colors
Edit Calculator.css to change button colors:

Number buttons: .btn.number (currently #e0e0e0)
Operator buttons: .btn.operator (currently #ff9500)
Clear button: .btn.clear (currently #e74c3c)
Equals button: .btn.equals (currently #27ae60)
Display: .display (currently #222 background)

Adding New Operations
To add new operations, modify Calculator.js:

Add button in HTML with appropriate operator ID
Add case in calculate() function
Update operator handling in handleOperator() function

Adjusting Size
Modify .calculator-container width in Calculator.css (currently 320px)
Features Breakdown
Number Input

Prevents leading zeros (except for decimals)
Supports multi-digit numbers
Display resets automatically after operations
Handles long numbers with word-wrap

Operator Handling

Visual feedback on operator selection
Supports operator chaining
Previous result automatically becomes first operand
Prevents invalid operation sequences

Decimal Support

Only allows one decimal point per number
Automatically adds "0." when decimal pressed on empty display
Maintains decimal precision in calculations

Error Prevention

Division by zero returns 0
Clear button resets all states
Backspace works on individual digits
Display shows "0" when emptied completely

Browser Compatibility
Works on all modern browsers:

Chrome
Firefox
Safari
Edge
Opera

Technical Details

No external dependencies required
Pure vanilla JavaScript with ES6 features
CSS Grid for button layout
Event-driven architecture
Lightweight and fast performance
Floating-point arithmetic using JavaScript's native operations

Keyboard Support
Currently mouse/touch only. To add keyboard support, you would need to implement event listeners for keyboard input in the JavaScript file.
Known Limitations

No keyboard input support (mouse/touch only)
Floating-point precision limitations inherent to JavaScript
No memory functions (M+, M-, MR, MC)
No advanced operations (square root, percentage, etc.)
No calculation history

Future Enhancement Ideas

Keyboard support for number and operator input
Memory functions (M+, M-, MR, MC)
Percentage calculations
Scientific calculator mode
Calculation history
Copy/paste support
Themes (light/dark mode)
