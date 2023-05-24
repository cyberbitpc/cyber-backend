import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai'

class ChatGPTService {
  private openai: OpenAIApi

  constructor(apiKey: string) {
    const configuration = new Configuration({
      apiKey: apiKey,
    })
    this.openai = new OpenAIApi(configuration)
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const request: CreateCompletionRequest = {
        model: 'text-davinci-003',
        prompt: prompt,
      }

      const completion = await this.openai.createCompletion(request)
      const response = completion.data.choices[0].text

      if (response) {
        return response
      } else {
        throw new Error('Empty response')
        // или вернуть значение по умолчанию
        // return 'Default response';
      }
    } catch (error) {
      console.error('Error generating response:', error)
      throw error
    }
  }
}

export default ChatGPTService
