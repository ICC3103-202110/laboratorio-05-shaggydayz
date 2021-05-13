
function update(billAmount, percent, model){
    const tip = (billAmount*percent)/100
    const total = Number(billAmount) + Number(tip)
    return{
        ...model,
        billAmount: billAmount,
        percent: percent,
        tip: tip,
        total: total
    }

}
    

module.exports = {
    update
}