import { calculateInvestmentResults, formatter } from '../util/investment.js'

function Results({ userInputs })
{
    const resultsData = calculateInvestmentResults(userInputs);

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {
                    resultsData.map(yearData => {
                        const initialInvestment = userInputs.initialInvestment;
                        const totalInterest = yearData.valueEndOfYear - (yearData.annualInvestment * yearData.year) - initialInvestment;
                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(yearData.annualInvestment)}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}   

export default Results;