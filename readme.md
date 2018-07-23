## Live at Heroku (might take 10 seconds to load)

https://vast-refuge-71894.herokuapp.com/

Learned from: https://learnnode.com/

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

| Name          | Email (login)      | Password |
| ------------- | ------------------ | -------- |
| Wes Bos       | wes@example.com    | wes      |
| Debbie Downer | debbie@example.com | debbie   |
| Beau          | beau@example.com   | beau     |

Using mailtrap instead of sendgrid so account recovery is not possible (but for learning purposes it is set up)

# variables.env needs

```
NODE_ENV=development

DATABASE= mongoDB

MAIL_USER=user

MAIL_PASS=pass

MAIL_HOST=mailtrap.io

MAIL_PORT=port

PORT=7777

MAP_KEY=google maps key

SECRET=any string here

KEY=key
```
