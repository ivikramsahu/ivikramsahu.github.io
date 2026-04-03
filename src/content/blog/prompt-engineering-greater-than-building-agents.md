---
title: Prompt Engineering > Building Agents
date: 2026-04-03
draft: false
---

It’s been a while since I started working heavily on product documentation and release notes. And every time I begin writing a feature description, I’m reminded of how much I still need to learn about prompting an AI model to generate the *right* output.

Yes — with AI, documentation can be generated in minutes, and at first glance it can even look 100% correct.

But is it really?

* Is the context aligned with the feature?
* Is the explanation simple and efficient?
* Does it truly help the reader understand the product?

In my experience, AI can do most of the heavy lifting — but the *essence* of good documentation only appears when the content is clear, simple, and easy to understand.

And it’s not just documentation.

Lately, I’ve been building agents, tools, and automations — and that’s when a bigger realization hit me:

> **Prompt engineering is often more important than building the agent itself.**

Because the agent is only as good as the instructions, context, and constraints you give it.

## "100-Iteration" Trap

I quickly learned that good prompts aren’t written once — they’re refined through dozens of iterations.

Most people treat prompting like typing a keyword into a search engine or giving a command. In reality, Prompts aren’t just instructions — they function like algorithms, shaping how the model approaches and executes the task.

When asking an AI to write something simple like an email, the first output is rarely the final one. We often follow up with changes like: make it less formal, shorten it, remove extra details, or adjust the tone.

This happens because we aren't using the prompt to its fullest potential. When we provide a lazy prompt, the AI has to guess our intent. It fills in the blanks with its own assumptions, which usually leads to a completely different response than what we pictured in our heads.

Instead of doing the heavy lifting upfront, we end up trapped in an endless loop of micro-corrections. You wouldn't write software by randomly typing lines of code and hitting "run" 100 times to see what sticks. You shouldn't prompt that way, either.

## The Butterfly Effect of Poor Prompts

Poor prompt engineering doesn't just waste your afternoon; it breaks things and leads to major losses, especially as we start hooking AI up to real-world applications.

- **Money Burning Machine** (The Token Drain): Every time you interact with an AI, your text is broken into small units called **tokens**. Every iteration, every back-and-forth, and every unnecessary piece of context consumes more tokens. If you’re building a product, you pay for those tokens — so a prompt that needs multiple rounds of corrections is quite literally burning money.

- **The Runaway Agent**: If you build an AI agent for customer service and your foundational prompt is "Help the customer," you have given it a terrible algorithm. It might "help" them by offering a 100% refund on an expired product because you didn't explicitly program the boundaries within the prompt.

- **The Hallucination Engine**: When an AI isn't given strict parameters, data structures, and a clear goal, it confidently makes things up.

## Flow of an AI

To understand why a prompt is an algorithm, you have to understand what happens the millisecond you hit "Send." AI doesn't read like a human; it calculates like a machine.

- **Tokenization**: Your prompt is chopped up into thousands of numerical tokens.

- **Context Mapping (Attention)**: The AI looks at all the tokens you send and decides what matters most based on its training. If your prompt is unclear or scattered, it may focus on the wrong details.

- **Pattern Prediction**: Based on the context you set, the AI calculates the most probable next token. It doesn't "think" about the answer; it builds it mathematically based only on the guardrails you provided.

- **Generation**: The AI produces the final response.

If the context you provide is weak or incomplete, the model has to guess what matters, which often leads to inconsistent or off-target results. But when the context is clear, relevant, and focused, the model can prioritize the right information and produce outputs that align closely with your intent.

## Cost of Lazy vs. Algorithmic Prompting

Here’s how treating a prompt like an algorithm can dramatically improve both the results you get and the tokens (time and money) you spend.

| Scenario                    | The “Lazy” Prompt (Instruction)           | The “Algorithmic” Prompt (Context & Guardrails)                                                                                                                                                                   | Token & Time Impact                                                                                                              | The Result                                                                         |
| --------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Fixing Grammar**          | “Fix this text: [text]”                   | “Act as an expert copyeditor. Fix the grammar in the following text. Do not change the original tone, vocabulary, or length. Output **only** the corrected text. Text: [text]”                                    | **Lazy:** High waste — AI explains changes, alters tone, and needs multiple follow-ups.<br>**Algorithmic:** One shot, efficient. | The algorithmic prompt acts as a filter and executes correctly on the first try.   |
| **Generating a Photo**      | “A dog in a park.”                        | “Subject: Golden Retriever catching a frisbee. Setting: Golden hour, sun flares, lush green grass. Style: Photorealistic, 35mm lens, high contrast.”                                                              | **Lazy:** Multiple re-rolls to get the right subject and lighting.<br>**Algorithmic:** Immediate usable asset.                   | The AI understands exactly what visual details to prioritize.                      |
| **Building an App / Agent** | “Write a Python script for a calculator.” | “You are a senior Python developer. Task: Write a CLI calculator app. Constraints: Use only standard libraries. Include error handling for divide-by-zero. Format: Provide only the code block, no explanations.” | **Lazy:** Buggy output, unnecessary explanations, more iterations.<br>**Algorithmic:** Production-ready code faster.             | The AI has a persona, a goal, and clear boundaries — like a well-defined function. |


## Setting the Context

If you want to build a truly autonomous agent, you don't start with complex coding frameworks. You start by writing a master prompt that acts as the agent's brain.

A proper prompt needs a structure, much like a function in coding needs variables and parameters:

- **Role**: Who is the AI? (e.g., You are a senior data analyst.)
- **Task**: What exactly needs to be done? (e.g., Summarize this dataset.)
- **Context**: Why are we doing this? (e.g., This is for a Q3 board meeting.)
- **Constraints**: What are the rules? (e.g., Do not use bullet points. Keep it under 200 words. Do not use jargon.)
- **Format**: How should it look? (e.g., Output as a markdown table.)

When you start connecting prompts like this, you’re no longer just chatting with AI — you’re designing a workflow. The output from one well-structured prompt can become the input for the next, forming a chain of steps that can power an entire business process.

AI isn’t a magic tool that can read your mind. It works best when you treat it like a powerful system that needs clear instructions. Once you get good at prompts, building agents becomes much easier.

## Stop Burning Tokens and Start Building

If you take one thing away from this article, let it be this: 

> **Language is the new programming language**. 

When you treat your prompts as precise algorithms rather than casual text messages, everything changes. Your apps break less, your agents act with actual autonomy, and you stop wasting hours fighting with AI over simple tasks.

But there is a secondary, highly practical reason to master prompt engineering: **Cost control**. Every unnecessary word, vague instruction, and iterative correction burns tokens and tokens equal money. 

If you are building an AI agent that runs hundreds of times a day, a bloated prompt can quietly drain your budget.

Before you write your next foundational prompt, bookmark a few of these tools to help you optimize your "code" and track your token burn:

- **The "Token Burner" Calculators:** Tools like the [GPT for Work API Pricing Calculator](https://gptforwork.com/tools/openai-chatgpt-api-pricing-calculator) or [LLM-Prices.com](https://llm-prices.com/) allow you to punch in your input/output estimates and see exactly how much your prompt will cost at scale. If your agent runs 10,000 times a month, you need to know if a prompt is costing you $5 or $500.

- **[OpenAI Tokenizer](https://platform.openai.com/tokenizer) / [TikToken](https://github.com/openai/tiktoken):** AI doesn't see words; it sees tokens. OpenAI’s free Tokenizer tool lets you paste your text and see exactly how it gets chopped up mathematically. A helpful rule of thumb: **1 token ≈ 4 characters** (or about ¾ of a word). 

- **[AgentOps Tokencost](https://github.com/AgentOps-AI/tokencost):** If you are actually building an app or agent, this is a Python library that sits in your code and actively tracks your client-side token counting and USD cost estimation across hundreds of models.

The next time you open an AI interface, pause before you type. Remember that you aren't just asking a question—you are compiling code. Give it a role, set the context, define the constraints, and watch what happens when you finally use AI to its fullest potential. 

Happy building.

## [AI Prompt Generator](/tools/#prompt-generator)

If you want a fast way to write “algorithmic prompts” (role + task + context + constraints + format), I built an [AI-powered prompt generator](/tools/#prompt-generator) that turns a few inputs into a clean, reusable prompt you can paste into any AI chat.

Example:

**Inputs**

- **Role:** a senior technical writer
- **Task:** Rewrite this feature description to be clearer and more user-focused.
- **Context:** This is for release notes for a developer audience.
- **Constraints:** Keep it under 150 words. Don’t add new claims. No bullet points.
- **Output format:** 1 short paragraph.

**Generated prompt (sample)**

```text
You are a senior technical writer.
Task: Rewrite this feature description to be clearer and more user-focused.
Context: This is for release notes for a developer audience.
Constraints:
- Keep it under 150 words.
- Don’t add new claims.
- No bullet points.
Output format: 1 short paragraph.
If anything is unclear or missing, ask clarifying questions before answering.
```