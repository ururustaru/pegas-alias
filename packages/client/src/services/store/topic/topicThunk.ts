import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTopicAPI } from '../../http/topic'

export const getTopicApi = createAsyncThunk(
  'topic/getTopicApi',
  async function (id:string) {
    return await getTopicAPI(id);
  }
)

// export const createTopicApi = createAsyncThunk(
//   'forum/postTopicApi',
//   async function (data: any) {
//     return await createNewTopic(data)
//   }
// )
