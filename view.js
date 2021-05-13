const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model
    const {percent} = model
    const {tip} = model
    const {total} = model
    return [
        {
            billAmount: billAmount,
        percent: percent,
        tip: tip,
        total: total
        }
    ]
}

function inputForm(model){
    const {billAmount} = model
    const {percent} = model
    const message = 'Bill Amount?'
    const message2 = 'Tip(%)?'
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'input',
            message: message,
            default: billAmount
        },
        {
            name: 'percent',
            type: 'input',
            message: message2,
            default: percent
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}