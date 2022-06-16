# Multi-Check Login Form (BAD UI)

## About
This is a login form that was made intentionally terrible as an excuse to have fun playing around while building an app in Tauri.

I tried to make it as annoying for normal users as possible while making it as nice to hackers as I could. As the name suggests, this form checks if your information is valid multiple times and while you are using it. Every time a character is typed or removed or anything at all is changed, the server is checked to see if it's accurate to anything in the system, if it isn't you get an error message. To add to the announce of getting an error pop-up every single character you type, the server also takes about a second to run this check so the page actually freezes and stops accepting input during that time. 

All of that is extremely annoying to normal users but I also promised I'd have something good for the hackers out there. First of all, the username and password are both "admin" making a guessing game fairly simple. Nothing is encrypted either so you can look into the code and find the username and password hard coded in. To make it better though, even if you didn't know the username or password, the system only alerts you when you're wrong. If you're right, it doesn't alert you at all and removed the errors. That means if you don't know the password, you will as soon as you stumple upon the right guess.

Please don't take any of this seriously but if you decide to, the license is MIT.