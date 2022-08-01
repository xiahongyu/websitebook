import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL:'http://localhost:3000/',
		timeout:4000
	})
	
	instance.interceptors.request.use(conf=>{
		return conf;
	},err=>{})
	
	instance.interceptors.response.use(res=>{
		return res;
	},err=>{})
	
	return instance(config);
}