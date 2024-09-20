import calculateInvestmentResults from '../util/investment.js'

function Results({ userInputs })
{
    const resultsData = calculateInvestmentResults(userInputs)
}   

export default Results;