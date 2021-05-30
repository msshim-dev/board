import Mysql from './helper'

const mysql = new Mysql()

const getNowDateTimeString = () => {
    let today = new Date();
    //today.setHours(today.getHours() + 9);
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let datetimeString = date + ' ' + time;

    return datetimeString;
}

const board = {
    postBoard: async (writer, subject, content, password) => {
        let datetimeString = getNowDateTimeString();
        return mysql.query(`insert into board (subject, content, writer, password, regdate) values('${subject}', '${content}','${writer}', '${password}', '${datetimeString}')`)
            .then(() => {
                return null
            })
            .catch(err => {
                console.log(err)
                return err
            });
    },

    postComment: async (writer, content, ppid, pcid, password) => {
        let datetimeString = getNowDateTimeString();
        if (pcid == undefined) {
            pcid = 0
        }
        return mysql.query(`insert into comment (ppid, pcid, content, writer, password, regdate) values(${ppid}, ${pcid}, '${content}', '${writer}', '${password}', '${datetimeString}')`)
            .then(() => {
                return null
            })
            .catch(err => {
                console.log(err)
                return err
            });
    }
}

export default board