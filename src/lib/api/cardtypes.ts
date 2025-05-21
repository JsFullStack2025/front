import { API_CONFIG } from '../api/api.consts'
import axios from 'axios'

export default async function GetCardTypesList()
{
    axios.get(`${process.env.API_URL}/cardtypes`)
    .then((resp) => {
    return resp.data;
    });
}
