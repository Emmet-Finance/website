// External imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { isGreaterOrEqual, humanToBigInt } from 'emmet.sdk';
// Local Imports
import FormattedInput from './FormattedInput';
import { useAppSelector } from '../state/store';
import { setErrorMessage, setNeedApproval } from '../state/ui';
import { setApprovedAmount, setTransferAmount } from '../state/transactions'


const BigInt = window.BigInt;

function AmountBox() {

    const dispatch = useDispatch();
    const tokens = useAppSelector(state => state.tokens);
    const transaction = useAppSelector(state => state.transaction);
    const wallets = useAppSelector((state) => state.wallets);

    const handleAmountChange = async (value) => {

        dispatch(setErrorMessage(''));
        const a = parseFloat(value);

        if (value && a) {
            const b = wallets.balances
                ? wallets.balances[tokens.fromTokens]
                : 0;

            if (b) {
                const aToDec = humanToBigInt(value);
                // Check whether balance (b) is > than transfer amount (aToDec)
                if (isGreaterOrEqual(b, aToDec)) {
                    dispatch(setTransferAmount(aToDec.toString()))

                    // Check whether approval is required
                    const allowance = wallets.allowances
                        ? wallets.allowances[tokens.fromTokens]
                        : 0;
                    if (!isGreaterOrEqual(allowance, aToDec)) {
                        dispatch(setNeedApproval(true));
                        dispatch(setApprovedAmount(aToDec.toString()));
                    } else {
                        dispatch(setNeedApproval(false));
                    }
                } else {
                    dispatch(setErrorMessage(`Balance is not enough for this transaction`));
                }
            } else {
                if (!b) { dispatch(setErrorMessage(`No wallet connected to check the balance.`)); }
                if (!a) { dispatch(setErrorMessage(`Amount is not provided`)); }
            }
        } else {
            dispatch(setTransferAmount(''));
        }
    }

    const onMaxClickHandle = () => {
        const maxAmount = wallets.balances
            ? wallets.balances[tokens.fromTokens]
            : '';
        if (maxAmount) {
            dispatch(setTransferAmount(maxAmount));
        } else {
            dispatch(setErrorMessage(`No wallet connected to check the balance.`));
        }
    }

    return (
        <>
            <FormattedInput
                placeholder="To be sent"
                onParentChange={handleAmountChange}
                externalData={transaction.transferAmount
                    ? BigInt(transaction.transferAmount) / 10n ** BigInt(tokens.fromDecimals)
                    : ''}
            />
            <p
                onClick={e => onMaxClickHandle(e)}
                className='max-button'
            >
                MAX
            </p>
        </>
    )
}

export default AmountBox;