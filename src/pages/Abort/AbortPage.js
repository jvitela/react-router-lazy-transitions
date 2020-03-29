import React from 'react'
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
    history.replace(links.prev);
    addNotice(TOASTS, 'Failed to fetch data', 3000);
    throw new Error('Failed');
}