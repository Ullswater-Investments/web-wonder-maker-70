import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  radius: number;
  type: "hub" | "consumer" | "subject" | "holder";
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  { id: "hub", label: "ProcureData", x: 250, y: 200, color: "hsl(32, 94%, 44%)", radius: 40, type: "hub" },
  { id: "consumer1", label: "Consumer A", x: 80, y: 80, color: "hsl(215, 60%, 50%)", radius: 28, type: "consumer" },
  { id: "consumer2", label: "Consumer B", x: 80, y: 320, color: "hsl(215, 60%, 50%)", radius: 28, type: "consumer" },
  { id: "subject1", label: "Subject", x: 420, y: 100, color: "hsl(142, 60%, 40%)", radius: 28, type: "subject" },
  { id: "subject2", label: "Subject", x: 420, y: 300, color: "hsl(142, 60%, 40%)", radius: 28, type: "subject" },
  { id: "holder", label: "Holder", x: 250, y: 380, color: "hsl(262, 52%, 47%)", radius: 28, type: "holder" },
];

const connections: Connection[] = [
  { from: "consumer1", to: "hub" },
  { from: "consumer2", to: "hub" },
  { from: "hub", to: "subject1" },
  { from: "hub", to: "subject2" },
  { from: "hub", to: "holder" },
  { from: "holder", to: "subject1" },
];

const getNode = (id: string) => nodes.find((n) => n.id === id)!;

const DataParticle = ({ from, to, delay }: { from: Node; to: Node; delay: number }) => {
  return (
    <motion.circle
      r="3"
      fill="hsl(32, 94%, 54%)"
      filter="url(#glow)"
      initial={{ cx: from.x, cy: from.y, opacity: 0 }}
      animate={{
        cx: [from.x, (from.x + to.x) / 2, to.x],
        cy: [from.y, (from.y + to.y) / 2 - 20, to.y],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    />
  );
};

export const FederatedNetworkDiagram = () => {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <svg viewBox="0 0 500 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="hsl(215, 20%, 65%)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.4"
            />
          );
        })}

        {/* Data particles */}
        {connections.map((conn, i) => (
          <DataParticle
            key={`p-${i}`}
            from={getNode(conn.from)}
            to={getNode(conn.to)}
            delay={i * 0.8}
          />
        ))}

        {/* Hub pulse */}
        <motion.circle
          cx={250}
          cy={200}
          r={40}
          fill="none"
          stroke="hsl(32, 94%, 54%)"
          strokeWidth="2"
          animate={{ r: [40, 60, 40], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.radius}
              fill={node.color}
              filter="url(#nodeShadow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize={node.type === "hub" ? "11" : "8"}
              fontWeight="600"
              className="select-none pointer-events-none"
            >
              {node.type === "hub" ? "HUB" : node.label.split(" ")[0]}
            </text>
            <text
              x={node.x}
              y={node.y + node.radius + 16}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              fontSize="10"
              className="fill-muted-foreground select-none pointer-events-none"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
