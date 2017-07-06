import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

const url = '/api/users'

export function fetch({page}){
  return request(`${url}?_page=${page}&_limit=${PAGE_SIZE}`)
}

export function remove(id){
  return request(`${url}/${id}`, {
    method: 'DELETE'
  })
}

export function patch (id, values){
  return request(`${url}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

export function create(values) {
  return request(`${url}`, {
    method: 'POST',
    body: JSON.stringify(values),
  });
}