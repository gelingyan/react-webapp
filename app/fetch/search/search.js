/**
 * Created by gelingyan on 2017/9/17.
 */
import { get } from '../get'

export function getSearchData(page, city, category, keyword) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}