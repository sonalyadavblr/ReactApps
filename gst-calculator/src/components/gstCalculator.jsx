import React, { Component } from 'react';
import './gstCalculator.css';

export default class GstCalculator extends Component{
    render() {
        return (
            <div id="gstAppBody">
                <div className="gstAppTitle">GST Calculator</div>
                <div className="gstAppCalculator">
                    <table>
                        <tr>
                            <td className="gstAppLabels">Original Price</td>
                            <td><input type="text" className="originalPrice" value="0"/></td>
                        </tr>
                        <tr>
                            <td className="gstAppLabels">GST</td>
                            <td>
                                <div>
                                    <input type="button" className="buttons gstAppPercent" value="5%" />
                                    <input type="button" className="buttons gstAppPercent" value="15%" />
                                    <input type="button" className="buttons gstAppPercent" value="18%" />
                                    <input type="button" className="buttons gstAppPercent" value="28%"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="gstAppLabels">CGST/SGST</td>
                            <td><div className="gstAppOutputs">0</div></td>
                        </tr>
                        <tr>
                            <td className="gstAppLabels">IGST</td>
                            <td><div className="gstAppOutputs">0</div></td>
                        </tr>
                        <tr>
                            <td className="gstAppLabels">Final Price</td>
                            <td><div className="gstAppOutputs">0</div></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" className="buttons gstAppCalculateButton" value="Calculate"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}