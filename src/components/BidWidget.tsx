// src/components/BidWidget.tsx
import { io } from 'socket.io-client'

export default function BidWidget({ productId }) {
  const [currentBid, setCurrentBid] = useState(0)
  
  useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('new-bid', (bid) => {
      setCurrentBid(bid.amount)
    })
    return () => socket.disconnect()
  }, [])

  return <div>Current Bid: ${currentBid}</div>
}