3 Tables
- Users
    - ID (number)*
    - Name
        - First (string)
        - Last (string)
        - Nickname (string)
    - DOB (date)
    - email (string)
    - Password (string, hashed)
    - Bio (string)
    - Date Created (DateTime)
    - Status (enum:{online, away, offline})
- Posts
    - Post ID (number)@
    - User ID (number)*
    - Date (DateTime)
    - Num. Likes (number)
- Comments
    - Post ID (number)@
    - Commenter ID (number)*
    - Comment (string)
- Friends
    - Requester (number)*
    - Requested (number)*
    - Date Requested (DateTime)
    - Intensity - determined by number of interactions, ex. number of posts from one liked by the other, comments on each other's posts, etc. (number)
    - Status (enum: {accepted, declined, requested})

NOTE: *,@ => linked values (User ID and Post ID repsectively)