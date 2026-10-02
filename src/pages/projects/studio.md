---
layout: ../../layouts/Project.astro
title: Studio
kind: studio
order: 1
category: AI / Document search
summary: An AI workspace that turns documents and web content into grounded conversations.
stack: [Python, FastAPI, React, Vite, Qdrant, Groq API, Docker]
repo: https://github.com/Kushagra0514/Studio
metric: 91%
metricLabel: retrieval recall in project evaluation
highlight: "78% → 91% retrieval recall"
---

## The problem

Useful information often lives across PDFs, documents, text files, and web pages. Finding a passage is one task; getting an answer that uses the right context is another. I built Studio to bring these sources into one locally deployable conversational workspace.

## How it works

Studio ingests PDF, DOCX, TXT, and scraped web content. A FastAPI backend coordinates ingestion and queries, while a React frontend provides the workspace. The project indexed more than 2,500 document chunks.

A three-route query pipeline classifies requests into document retrieval, live web search, or direct conversation. This keeps retrieval focused on questions that actually need document context. The router reached 94% accuracy across more than 200 evaluation queries.

## Combining two kinds of search

Dense embeddings help find semantically related passages. BM25 helps preserve exact-term matches. Studio combines both approaches over a local Qdrant database, with FastEmbed generating embeddings locally using BAAI/bge-small-en-v1.5.

In the project's evaluation, hybrid retrieval improved recall from 78% to 91%. Optimizing retrieval and local inference reduced average document-search latency from 620 ms to 340 ms.

## Making it easier to run

Docker packages the FastAPI backend, React/Vite frontend, and Nginx setup into a single-command deployment. Local setup dropped from roughly 15 minutes to under two minutes in the reported workflow.

Retrieval and embedding generation run locally. The application also uses the Groq API and can perform live web searches, so the complete application is not an entirely offline system.

## Explore or contribute

The repository is the place to inspect the pipeline and deployment setup. Retrieval evaluation, source handling, and the experience of asking questions over documents are useful starting points for a technical conversation.
