import React, {useEffect, useState} from 'react';
import { useAppSelector } from '../state/store';
import SlippageTolerance from './SlippageToleranceModal';
import { bigIntToHuman } from '../utils';

function InformationalBlock() {

    const chains = useAppSelector(state => state.chains);
    const tokens = useAppSelector(state => state.tokens);
    const transaction = useAppSelector(state => state.transaction);
    const [allowance, setAllowance] = useState('');

    useEffect(() => {

        if(tokens.tokenAllowances){
            setAllowance(tokens.tokenAllowances[tokens.fromTokens.toUpperCase()])
        }

    },[tokens, tokens.tokenAllowances])

    return (
        <div className="bridgeCalculation">
            <div className="calculateBox">
                <span>Allowance:</span>
                {allowance
                    ? `${bigIntToHuman(allowance)}`.slice(0,18) + ` ${tokens.fromTokens}`
                    : `0.00 ${tokens.fromTokens}`
                }
            </div>
            <div className="calculateBox">
                <span>Gas Estimation:</span>
                {/* TODO: {transaction.nativeFee
                    ? bigIntToHuman((transaction.nativeFee), tokens.fromDecimals).slice(0,16)
                    : '0.001'} */}
                {'0.001'}
                {" "}
                {chains.nativeCurrency}
            </div>
            <div className="calculateBox">
                <span>Slippage:</span>
                {transaction.slippage}%  <SlippageTolerance />
            </div>
        </div>
    )
}

export default InformationalBlock;