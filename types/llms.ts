export interface LLM {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  temperature?: number;
  top_p?: number;
}

export enum LLMID {
  MISTRAL = 'mistral',
  DOLPHINMIXTRAL = 'dolphin-mixtral',
  NOUSHERMESMIXTRAL = 'nous-hermes2-mixtral',
  LLAMA318B8Bit = 'Meta-Llama-3-1-8B-Instruct-FP8',
  LLAMA31405B8Bit = 'Meta-Llama-3-1-405B-Instruct-FP8',
  LLAMA323B = 'Meta-Llama-3-2-3B-Instruct',
  LLAMA3370B = 'Meta-Llama-3-3-70B-Instruct',
  DEEPSEEKV3 = 'DeepSeek-V3',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = LLMID.LLAMA318B8Bit;

export const LLMS: Record<LLMID, LLM> = {
  [LLMID.MISTRAL]: {
    id: LLMID.MISTRAL,
    name: 'Mistral-7B',
    maxLength: 12000,
    tokenLimit: 8192,
  },
  [LLMID.NOUSHERMESMIXTRAL]: {
    id: LLMID.NOUSHERMESMIXTRAL,
    name: 'Nous Hermes 2 Mixtral',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [LLMID.DOLPHINMIXTRAL]: {
    id: LLMID.DOLPHINMIXTRAL,
    name: 'Dolphin Mixtral',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [LLMID.LLAMA318B8Bit]: {
    id: LLMID.LLAMA318B8Bit,
    name: 'Llama 3.1 8B',
    maxLength: 4000,
    tokenLimit: 12000,
    temperature: 0.6,
    top_p: 0.9
  },
  [LLMID.LLAMA31405B8Bit]: {
    id: LLMID.LLAMA31405B8Bit,
    name: 'Llama 3.1 405B - Most intelligent',
    maxLength: 4000,
    tokenLimit: 12000,
    temperature: 0.6,
    top_p: 0.9
  },
  [LLMID.LLAMA323B]: {
    id: LLMID.LLAMA323B,
    name: 'Llama 3.2 3B - Fastest',
    maxLength: 4000,
    tokenLimit: 12000,
    temperature: 0.6,
    top_p: 0.9
  },
  [LLMID.LLAMA3370B]: {
    id: LLMID.LLAMA3370B,
    name: 'Llama 3.3 70B - Great for most tasks',
    maxLength: 8000,
    tokenLimit: 24000,
    temperature: 0.6,
    top_p: 0.9
  },
  [LLMID.DEEPSEEKV3]: {
    id: LLMID.DEEPSEEKV3,
    name: 'DeepSeek V3',
    maxLength: 4096,
    tokenLimit: 16384,
    temperature: 0.7,
    top_p: 1.0
  }
};
