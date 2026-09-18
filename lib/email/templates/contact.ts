type ContactEmailData = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: string
  message: string
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function contactEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  subject,
  message,
}: ContactEmailData) {
  const safeFirstName = escapeHtml(firstName)
  const safeLastName = escapeHtml(lastName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone || 'Not provided')
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>New Contact Enquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #F5F5F5;
          font-family: Arial, Helvetica, sans-serif;
          color: #14213D;
        "
      >

        <!-- Outer Container -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color: #F5F5F5;"
        >
          <tr>
            <td align="center" style="padding: 40px 20px;">

              <!-- Main Card -->
              <table
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  width: 100%;
                  max-width: 600px;
                  background-color: #FFFFFF;
                  border: 1px solid #E5E5E5;
                  border-radius: 8px;
                  overflow: hidden;
                "
              >

                <!-- Header -->
                <tr>
                  <td style="padding: 30px 35px 25px;">

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>

                        <!-- Logo -->
                        <td
                          width="120"
                          valign="middle"
                          style="padding-right: 20px;"
                        >
                          <img
                            src="https://zvve3t2t9mgsxztu.public.blob.vercel-storage.com/no-bg-logo.png"
                            alt="Spirit Fountain Global Church"
                            width="100"
                            style="
                              display: block;
                              width: 100px;
                              max-width: 100%;
                              height: auto;
                              border: 0;
                            "
                          />
                        </td>

                        <!-- Church Name -->
                        <td
                          valign="middle"
                          style="
                            border-left: 2px solid #C9A84C;
                            padding-left: 20px;
                          "
                        >
                          <div
                            style="
                              font-family: Georgia, 'Times New Roman', serif;
                              color: #14213D;
                              font-size: 25px;
                              line-height: 1.15;
                              font-weight: bold;
                            "
                          >
                            SPIRIT FOUNTAIN
                          </div>

                          <div
                            style="
                              margin-top: 5px;
                              color: #C9A84C;
                              font-size: 15px;
                              letter-spacing: 4px;
                            "
                          >
                            GLOBAL CHURCH
                          </div>

                          <div
                            style="
                              margin-top: 10px;
                              color: #7B8495;
                              font-size: 9px;
                              letter-spacing: 3px;
                            "
                          >
                            WORSHIP · CONNECT · TRANSFORM
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Gold Divider -->
                <tr>
                  <td style="padding: 0 35px;">
                    <div
                      style="
                        height: 2px;
                        background-color: #C9A84C;
                      "
                    ></div>
                  </td>
                </tr>

                <!-- Title -->
                <tr>
                  <td style="padding: 30px 35px 10px;">

                    <h1
                      style="
                        margin: 0;
                        color: #14213D;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 30px;
                        line-height: 1.2;
                        font-weight: bold;
                      "
                    >
                      New Contact Enquiry
                    </h1>

                    <p
                      style="
                        margin: 12px 0 0;
                        color: #B08A24;
                        font-size: 12px;
                        letter-spacing: 4px;
                      "
                    >
                      SPIRIT FOUNTAIN GLOBAL CHURCH
                    </p>
                  </td>
                </tr>

                <!-- Contact Information -->
                <tr>
                  <td style="padding: 25px 35px 30px;">
                    <h2
                      style="
                        margin: 0 0 22px;
                        color: #14213D;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 20px;
                      "
                    >
                      <span style="color: #C9A84C;">●</span>
                      &nbsp; Contact Information
                    </h2>

                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>
                        <td
                          width="100"
                          style="
                            padding: 6px 0;
                            color: #A17C1F;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-weight: bold;
                          "
                        >
                          Name:
                        </td>

                        <td
                          style="
                            padding: 6px 0;
                            color: #26344D;
                          "
                        >
                          ${safeFirstName} ${safeLastName}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding: 6px 0;
                            color: #A17C1F;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-weight: bold;
                          "
                        >
                          Email:
                        </td>

                        <td
                          style="
                            padding: 6px 0;
                            color: #26344D;
                          "
                        >
                          ${safeEmail}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding: 6px 0;
                            color: #A17C1F;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-weight: bold;
                          "
                        >
                          Phone:
                        </td>

                        <td
                          style="
                            padding: 6px 0;
                            color: #26344D;
                          "
                        >
                          ${safePhone}
                        </td>
                      </tr>

                      <tr>
                        <td
                          style="
                            padding: 6px 0;
                            color: #A17C1F;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-weight: bold;
                          "
                        >
                          Subject:
                        </td>

                        <td
                          style="
                            padding: 6px 0;
                            color: #26344D;
                          "
                        >
                          ${safeSubject}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding: 0 35px 35px;">
                    <div
                      style="
                        border-top: 1px solid #E5E5E5;
                        padding-top: 25px;
                      "
                    >
                      <h2
                        style="
                          margin: 0 0 18px;
                          color: #14213D;
                          font-family: Georgia, 'Times New Roman', serif;
                          font-size: 20px;
                        "
                      >
                        <span style="color: #C9A84C;">●</span>
                        &nbsp; Message
                      </h2>

                      <div
                        style="
                          background-color: #FAFAFA;
                          border-left: 4px solid #C9A84C;
                          border-radius: 4px;
                          padding: 20px;
                          color: #3F4A5A;
                          font-size: 14px;
                          line-height: 1.8;
                        "
                      >
                        ${safeMessage}
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Website Notice -->
                <tr>
                  <td
                    align="center"
                    style="padding: 0 35px 35px;"
                  >
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>
                        <td
                          style="
                            width: 70px;
                            height: 1px;
                            background-color: #C9A84C;
                          "
                        ></td>
                        <td
                          style="
                            padding: 0 15px;
                            text-align: center;
                            color: #7B8495;
                            font-size: 12px;
                            line-height: 1.6;
                          "
                        >
                          This message was submitted through the
                          <br />
                          <strong style="color: #14213D;">
                            Spirit Fountain Global Church website.
                          </strong>
                        </td>

                        <td
                          style="
                            width: 70px;
                            height: 1px;
                            background-color: #C9A84C;
                          "
                        ></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td
                    align="center"
                    style="
                      padding: 18px;
                      background-color: #0E1B2D;
                      border-top: 3px solid #C9A84C;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #FFFFFF;
                        font-size: 10px;
                        letter-spacing: 3px;
                      "
                    >
                      SPIRIT FOUNTAIN GLOBAL CHURCH
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}