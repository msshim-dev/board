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
    },

    updateBoard: async (id, subject, content, password) => {
        return mysql.query(`update board set subject='${subject}', content='${content}' where id=${id} and password='${password}'`)
            .then(() => {
                return null
            })
            .catch(err => {
                console.log(err)
                return err
            });
    },

    updateComment: async (id, content, password) => {
        return mysql.query(`update comment set content='${content}' where id=${id} and password='${password}'`)
            .then(() => {
                return null
            })
            .catch(err => {
                console.log(err)
                return err
            });
    },

    getBoard: async (page) => {
        return await mysql.query(`select count(*) as boardcount from board`)
            .then(rows => {
                let count = rows[0].boardcount
                console.log(count)
                return null
            })
            .catch(err => {
                console.log(err)
                return err
            });
    },

    getComment: async (pid) => {
        return await mysql.query(`select id, pcid, content, writer, regdate from comment where ppid=${pid}`)
            .then(rows => {
                console.log(rows)
                return rows
            })
            .catch(err => {
                console.log(err)
                return err
            });
    }
}

export default board