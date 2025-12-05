import type { Question } from "../models/Question"

export const Questions: Question[] = [
  {
    "id": 142,
    "text": "Qual serviço da Huawei Cloud é focado em orquestração de containers?",
    "level": "HCIA",
    "track": "Cloud",
    "weight": "2.50", 
    "has_answer": true,
    "has_multiple_answers": false,
    "submitted_by": 5,
    "reviewed_by": 2,
    "approved_at": "2023-10-27T10:00:00Z",
    "last_update": "2023-10-28T14:30:00Z",
    "alternatives": [
      {
        "id": 10,
        "text": "ECS (Elastic Cloud Server)",
        "is_correct": false,
        "sources": []
      },
      {
        "id": 11,
        "text": "CCE (Cloud Container Engine)",
        "is_correct": true,
        "sources": [
          {
            "id": 1,
            "source": "https://support.huaweicloud.com/cce/index.html"
          }
        ]
      },
      {
        "id": 12,
        "text": "OBS (Object Storage Service)",
        "is_correct": false,
        "sources": []
      },
    ]
  },
  
  {
    "id": 205,
    "text": "Quais dos seguintes são estados válidos do protocolo OSPF?",
    "level": "HCIP",
    "track": "Network",
    "weight": "3.00",
    "has_answer": true,
    "has_multiple_answers": true,
    "submitted_by": 8,
    "reviewed_by": 12,
    "approved_at": "2024-01-15T09:00:00Z",
    "last_update": "2024-01-15T09:00:00Z",
    "alternatives": [
      {
        "id": 44,
        "text": "Down",
        "is_correct": true,
        "sources": []
      },
      {
        "id": 45,
        "text": "Learning",
        "is_correct": false,
        "sources": []
      },
      {
        "id": 46,
        "text": "Full",
        "is_correct": true,
        "sources": [
           { "id": 5, "source": "https://rfc-editor.org/rfc/rfc2328.html" }
        ]
      },
      {
        "id": 47,
        "text": "Blocking",
        "is_correct": false,
        "sources": []
      }
    ]
  },
  {
    "id": 310,
    "text": "Analise o script Python abaixo:\n\n```python\ndef func(x):\n    return x * 2\n```\n\nQual é o output se chamarmos `func(5)`?",
    "level": "HCIA",
    "track": "Computing",
    "weight": "1.50",
    "has_answer": true,
    "has_multiple_answers": false,
    "submitted_by": 3,
    "reviewed_by": 3,
    "approved_at": "2024-02-10T14:20:00Z",
    "last_update": "2024-02-12T08:15:00Z",
    "alternatives": [
      {
        "id": 89,
        "text": "10",
        "is_correct": true,
        "sources": []
      },
      {
        "id": 90,
        "text": "25",
        "is_correct": false,
        "sources": []
      },
      {
        "id": 91,
        "text": "Erro de Sintaxe",
        "is_correct": false,
        "sources": []
      }
    ]
  }
]
  