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
      }
    ]
  }
]
  