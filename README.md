#Exercise summary

Consume JSON messages from an API, and display them to a user.

You may use any resources, programming languages, platforms, or frameworks to fulfill the exercise. Put all the code into a single git repository. The exercise should not take more than a few hours, so scope the level of effort to that amount of time. We will use the code as the basis of a technical discussion later.

##Backend detail
Create a backend service that serves JSON over HTTP. It should have one API endpoint at /messages that returns a JSON array of objects. Each object has the following fields:
- id (integer)
- timestamp (integer)
- subject (text)
- detail (text)

##Frontend detail
The UI should display a list of messages with the most recent at the top. This list view should show the human-readable date/time of the message, and the subject. Clicking the message should show the message's detail text, and should mark the message as "read". Read and unread messages should be visually distinct. The user should be able to close the detail view to go back to the original list view. The user should be able to manually request an update for new messages.

The UI can be a web frontend, or a mobile one. If mobile, it can be either native or using a cross-platform framework.
Other

You may add parameters to the defined API, or add other APIs, as you see fit.
