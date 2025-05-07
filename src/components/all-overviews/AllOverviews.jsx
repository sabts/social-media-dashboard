import { OVERVIEW_ELEMENTS } from '../../components/overview-boxes/overview_elements.js';
import OverviewsBoxes from '../../components/overview-boxes/OverviewBoxes.jsx';
import { v4 } from 'uuid';

const AllOverviews = () => {
    return <div>
        {OVERVIEW_ELEMENTS.map(stats=>
            <OverviewsBoxes key={v4()} {...stats}/>
        )}
    </div>
} 
export default AllOverviews