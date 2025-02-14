import React from 'react'
import '../globals.css'

function RoomDropdown() {
  return (
    <div className='text-darkblue flex flex-col'>
      <label>Choose a Room</label>
<select id="roomFilter" className='border border-1 rounded-10 max-w-[120px] p-1.5'>
  <option value="all">All Rooms</option>
  <option value="2.200">2.200</option>
  <option value="2.202">2.202</option>
  <option value="2.203">2.203</option>
  <option value="2.204">2.204</option>
  <option value="2.205">2.205</option>
  <option value="2.206">2.206</option>
  <option value="2.207">2.207</option>
  <option value="2.208">2.208</option>
  <option value="2.209">2.209</option>
  <option value="2.213">2.213</option>
  <option value="2.216">2.216</option>
  <option value="2.217">2.217</option>
  <option value="2.218">2.218</option>
  <option value="2.219">2.219</option>
  <option value="2.221">2.221</option>
  <option value="2.223">2.223</option>
  <option value="2.231">2.231</option>
  <option value="2.237">2.237</option>
  <option value="2.238">2.238</option>
  <option value="2.239">2.239</option>
  <option value="2.240">2.240</option>
  <option value="2.241">2.241</option>
  <option value="2.242">2.242</option>
  <option value="2.243">2.243</option>
  <option value="2.244">2.244</option>
  <option value="2.245">2.245</option>
  <option value="2.246">2.246</option>
  <option value="2.249">2.249</option>
  <option value="2.250">2.250</option>
  <option value="2.251">2.251</option>
  <option value="2.252">2.252</option>
  <option value="2.253">2.253</option>
  <option value="2.254">2.254</option>
  <option value="2.255">2.255</option>
  <option value="2.256">2.256</option>
  <option value="2.258">2.258</option>
  <option value="2.259">2.259</option>
  <option value="2.260">2.260</option>
  <option value="2.265">2.265</option>
  <option value="2.268">2.268</option>
  <option value="2.269">2.269</option>
  <option value="2.270">2.270</option>
  <option value="2.271">2.271</option>
  <option value="2.276">2.276</option>
  <option value="2.278">2.278</option>
  <optgroup label="Letter">
    <option value="A">A</option>
    <option value="A_2.200">A - 2.200</option>
    <option value="A_2.201">A1 - 2.201</option>
    <option value="A_2.223A">A - 2.223</option>
    <option value="A_2.237A">A - 2.237</option>
    <option value="A_2.245">A - 2.245</option>
    <option value="A_2.248A">A - 2.248</option>
    <option value="A_2.256A">A - 2.256</option>
    <option value="A_2.258A">A - 2.258</option>
    <option value="A_2.259A">A - 2.259</option>
    <option value="A_2.260A">A - 2.260</option>
    <option value="A_2.267A">A - 2.267</option>
    <option value="B">B</option>
    <option value="B_2.200">B - 2.200</option>
    <option value="B_2.222">B1 - 2.222</option>
    <option value="B_2.245">B - 2.245</option>
    <option value="C">C</option>
    <option value="C_2.220">C1 - 2.220</option>
    <option value="D">D</option>
    <option value="D_2.212">D1 - 2.212</option>
  </optgroup>
{/*   <optgroup label="Name">
    <option value="MAL">MAL</option>
    <option value="CORRIDOR">CORRIDOR</option>
    <option value="MULTIPROD">MULTIPROD</option>
    <option value="CLEAN">CLEAN</option>
    <option value="MAINTENANCE">MAINTENANCE</option>
    <option value="E.EXIT">E.EXIT</option>
  </optgroup> */}
</select>
    </div>
  )
}

export default RoomDropdown