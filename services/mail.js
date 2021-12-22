import nodemailer from 'nodemailer'
import dotenv from 'dotenv' 
dotenv.config()
class Mail{

    _html = ''

    constructor(){

        this.transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_PASS
            }
        })
        
    }


    async send(to, html, subject){

        this.transporter.sendMail({
            from: process.env.MAIL,
            to,
            subject,
            test: '',
            html,
        })
    }

    async sendActivationEmail(to,code){

        const link = `${process.env.LINK}/app/activate/${code}`

        const html = `
            <h1>Активация аккаунта</h1>
            <a href="${link}">Активируйте аккаунт</a>
        `

        await this.send(to, html, 'Активация email')

    }

}

export default new Mail