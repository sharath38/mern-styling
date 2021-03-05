import React from 'react'
import SHOP_DATA from './shop.data'
import './shop.style.scss'

import PreviewCollection from '../../components/collectionPreview/collection-preview.component'

class shopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {collections &&
                    collections.map(({ id, ...otherVCollections }) => (
                        <PreviewCollection key={id} {...otherVCollections} />
                    ))}
            </div>
        )
    }
}

export default shopPage
