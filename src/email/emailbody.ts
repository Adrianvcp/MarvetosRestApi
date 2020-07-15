class Emailbody {
  constructor() {}

  public HtmlEmail(pDireccion: string, distrito: string, pOrder: number) {
    var bodyEmail =
      `<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        @media screen and (max-width: 480px) {
            .mobile-hide {
                display: none !important;
            }

            .mobile-center {
                text-align: center !important;
            }
        }

        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>

<body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">



    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">

                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                    <tr>
                        <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#044767">
                            <div
                                style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                    style="max-width:300px;">
                                    <tr>
                                        <td align="left" valign="top"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                            class="mobile-center">
                                            <h1 style="font-size: 36px; font-weight: 800; margin: 0; color: #ffffff;">
                                                Marvetos</h1>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;"
                            bgcolor="#ffffff">

                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                        <img src="https://cdn1.iconfinder.com/data/icons/warnings-and-dangers/400/Warning-02-512.png"
                                            width="125" height="120" style="display: block; border: 0px;" /><br>
                                        <h2
                                            style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                            Gracias por tu compra!
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                        <p
                                            style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                                            Estamos trabajando para llevar tus productos en el menor tiempo posible.
                                        </p>
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" height="100%" valign="top" width="100%"
                            style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:660px;">
                                <tr>
                                    <td align="center" valign="top" style="font-size:0;">

                                        <div
                                            style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                style="max-width:300px;">
                                                <tr>
                                                    <td align="left" valign="top"
                                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                        <p style="font-weight: 800;">Numero de Orden #C00` +
      pOrder +
      ` </p>
                                                         
                                                        <p style="font-weight: 800;">Direccion de Envio</p>
                                                        <p>` +
      pDireccion +
      `<br>` +
      distrito +
      `,Perú</p>

                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                       
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="max-width:600px;">
                                <tr>
                                    <td align="center">
                                        <img src="https://static.wixstatic.com/media/805902_ae310720a5c947baace6b8064939e42f~mv2.png/v1/fill/w_475,h_250,al_c,q_85,usm_0.66_1.00_0.01/Marvetos%20Logo%201%20Alta%20fullHD%20blanco.webp"
                                            width="37" height="37" style="display: block; border: 0px;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center"
                                        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                                        <p
                                            style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">
                                            Manuel Arispe 235<br>
                                            Callao,Perú
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#ffffff" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center"
                            style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                            <p style="margin: 0;">Este es un email de <a href="http://localhost:4200/index"
                                    style="color: #5db3ec;">marvetos.</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`;
    return bodyEmail;
  }
  public Ticket(pemail: string, problema: string, pOrder: number) {
    var bodyEmail =
      `<!DOCTYPE html>
      <html>
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
              body,
              table,
              td,
              a {
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
              }
      
              table,
              td {
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
              }
      
              img {
                  -ms-interpolation-mode: bicubic;
              }
      
              /* RESET STYLES */
              img {
                  border: 0;
                  height: auto;
                  line-height: 100%;
                  outline: none;
                  text-decoration: none;
              }
      
              table {
                  border-collapse: collapse !important;
              }
      
              body {
                  height: 100% !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  width: 100% !important;
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: none !important;
                  font-size: inherit !important;
                  font-family: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
              }
      
              @media screen and (max-width: 480px) {
                  .mobile-hide {
                      display: none !important;
                  }
      
                  .mobile-center {
                      text-align: center !important;
                  }
              }
      
              div[style*="margin: 16px 0;"] {
                  margin: 0 !important;
              }
          </style>
      </head>
      
      <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
      
      
      
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
      
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#b82f2f">
                                  <div
                                      style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                          style="max-width:300px;">
                                          <tr>
                                              <td align="center" valign="top"
                                                  style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                  class="mobile-center">
                                                  <h1 style="font-size: 36px; font-weight: 800; margin: 0; color: #ffffff;">
                                                      Marvetos</h1>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
      
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;"
                                  bgcolor="#ffffff">
      
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                      style="max-width:600px;">
                                      <tr>
                                          <td align="center"
                                              style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/OOjs_UI_icon_alert_destructive.svg/1024px-OOjs_UI_icon_alert_destructive.svg.png"
                                                  width="125" height="120" style="display: block; border: 0px;" /><br>
                                              <h2
                                                  style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                                  Ticket Nuevo!
                                              </h2>
                                          </td>
                                      </tr>
      
                                  </table>
      
                              </td>
                          </tr>
                          <tr>
                              <td align="center" height="100%" valign="top" width="100%"
                                  style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                      style="max-width:660px;">
                                      <tr>
                                          <td align="center" valign="top" style="font-size:0;">
      
                                              <div
                                                  style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
      
                                                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                      style="max-width:500px;">
                                                      <tr>
                                                          <td align="left" valign="top"
                                                              style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                              <p style="font-weight: 800;">Numero de Orden# :
                                                              </p>
                                                              <p style="font-weight: 400;"> ` +
      pOrder +
      `</p>
                                                              <p style="font-weight: 800;">Email de usuario:</p>
                                                              <p style="font-weight: 400;">` +
      pemail +
      `</p>
                                                              <p style="font-weight: 800;">Detalle:</p>
                                                              <div style="font-weight: 400; width: 400px;word-wrap: break-word;
                                                              ">
                                                              ` +
      problema +
      `
                                                              </div>
      
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </div>
      
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
      
                          <tr>
                              <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                      style="max-width:600px;">
                                      <tr>
                                          <td align="center">
                                              <img src="https://static.wixstatic.com/media/805902_ae310720a5c947baace6b8064939e42f~mv2.png/v1/fill/w_475,h_250,al_c,q_85,usm_0.66_1.00_0.01/Marvetos%20Logo%201%20Alta%20fullHD%20blanco.webp"
                                                  width="37" height="37" style="display: block; border: 0px;" />
                                          </td>
                                      </tr>
                                      <tr>
                                          <td align="center"
                                              style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                                              <p
                                                  style="font-size: 14px; font-weight: 800; line-height: 18px; color: #333333;">
                                                  Manuel Arispe 235<br>
                                                  Callao,Perú
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td bgcolor="#ffffff" align="center">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                          <tr>
                              <td bgcolor="#ffffff" align="center"
                                  style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                                  <p style="margin: 0;">Este es un email de <a href="http://localhost:4200/index"
                                          style="color: #b82f2f;">marvetos.</a></p>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      </body>
      
      </html>`;
    return bodyEmail;
  }
}
const emailbody = new Emailbody();
export default emailbody;
