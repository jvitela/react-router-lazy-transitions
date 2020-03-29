import React from 'react'
import { sleep } from 'Utils'
import { TOASTS } from 'Constants'
import { addNotice } from 'components/Notifications'

export function AbortPage() {
    return (
        <div>
            <h4>AbortPage page</h4>
            <p>This page will never render</p>
        </div>
    );
};

AbortPage.getInitialProps = async function getInitialProps({ history, links }) {
    await sleep(1000);
    addNotice(TOASTS, 'Failed to fetch data', 3000);
    history.replace(links.prev);
    throw new Error('Failed');
}