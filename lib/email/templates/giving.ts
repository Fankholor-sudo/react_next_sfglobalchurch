type GivingEmailData = {
  givingType: string
  amount: string
  firstName: string
  lastName: string
  email: string
  phone?: string
}

export function givingEmailTemplate({
  givingType,
  amount,
  firstName,
  lastName,
  email,
  phone,
}: GivingEmailData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>New Giving Enquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #0F1117;
          font-family: Arial, Helvetica, sans-serif;
          color: #FFFFFF;
        "
      >
        <div
          style="
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          "
        >
          <div
            style="
              background-color: #181C27;
              border: 1px solid rgba(201,168,76,0.3);
              border-radius: 8px;
              padding: 32px;
            "
          >
            <h1
              style="
                margin: 0 0 8px;
                color: #C9A84C;
                font-size: 24px;
              "
            >
              New Giving Submission
            </h1>

            <p
              style="
                margin: 0 0 30px;
                color: #B0B8CC;
                font-size: 14px;
              "
            >
              Spirit Fountain Global Church
            </p>

            <div style="margin-bottom: 24px;">
              <p><strong>Giving Type:</strong>${givingType}</p>
              <p><strong>Amount:</strong>R ${amount}</p>
            </div>

            <div
              style="
                border-top: 1px solid rgba(201,168,76,0.2);
                padding-top: 24px;
              "
            >
              <h2
                style="
                  color: #C9A84C;
                  font-size: 16px;
                  margin: 0 0 12px;
                "
              >
                Donor Information
              </h2>

              <p><strong>Name:</strong>${firstName} ${lastName}</p>
              <p style="text-decoration: none;"><strong>Email:</strong>${email}</p>
              <p><strong>Phone:</strong>${phone || 'Not provided'}</p>
            </div>
          </div>

          <p
            style="
              text-align: center;
              color: #70788C;
              font-size: 12px;
              margin-top: 20px;
            "
          >
            Spirit Fountain Global Church
          </p>
        </div>
      </body>
    </html>
  `
}