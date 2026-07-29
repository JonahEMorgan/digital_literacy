---
id: "generate-fake-scam-emails-2026-07-29"
status: "backlog"
priority: "low"
assignee: "First come first serve"
epic: null
dueDate: null
created: "2026-07-29T19:02:20.486Z"
modified: "2026-07-29T20:32:36.360Z"
completedAt: null
labels: ["Hardest"]
order: "a3"
---
# Generate Fake Scam Emails

We need at least 100+ scam/not scam emails in our database to ensure that nobody has repeats when using the app

There are two ways to generate the emails, both involve OpenRouter

You will need to get an OpenRouter account, which will give you 50 free API requests per day

You need to find a free model which is capable of generating realistic scam emails without refusing on moral grounds

Most of this task will need to be completed in python

### Scam/Not Scam Email Requirements

- Sender Name
- Sender Email Address
- Time of Day
- Email Contents in BBCode Format
- Background Color
- Is it a scam or legit?
- Four options, one being the reason for why it is classified as scam or legit
  - Correct reason
  - Wrong reason #1 (obvious)
  - Wrong reason #2 (obvious)
  - Wrong reason #3 (challenging)

### Method #1

- Develop a prompt which will generate the emails (likely in structured form)
- Identify a python library or framework which allows you to make the OpenRouter requests
- See how many emails you can generate with one prompt. One?, ten?, one hundred?
- Genrate as many emails as possible by sending out requests every 30 minutes

### Method #2

- Use method #1 to generate a dataset of fake emails
- Download a capable open-weight LLM like Gemma 4 E2B or Nemotron Nano 3 4B
- Ensure Stanford DSPy, Huggingface TRL and Transformers are installed
- Use COPRO, GEPA, or BootstrapFinetune to train the open-weight LLM to emulate the OpenRouter output
- If using BootstrapFinetune, possibly use MLFlow for logging and checkpointing
- Generate emails by the dozen using your own local computer, paying only for electricity to power the computer