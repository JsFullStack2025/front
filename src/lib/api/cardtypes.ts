import { API_CONFIG } from '../api/api.consts'
import axios from 'axios'

export default async function GetCardTypesList()
{
    axios.get(API_CONFIG.Url + "/cardtypes")
    .then((resp) => {
    return resp.data;
    });
}
