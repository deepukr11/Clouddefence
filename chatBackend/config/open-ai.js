// import { Configuration, OpenAIApi } from 'openai';
// import { GoogleGenerativeAI }  from '@google/generative-ai;
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI  = new GoogleGenerativeAI(process.env.API_KEY);

// const openai = new OpenAIApi(configuration);

export default genAI;