<h1 align="center">🚀</h1>
<h3 align="center">go-live-action</h3>

<p align="center">
    Check if the Pull Request is Ready to be Merged in the main branch.
</p>

## Usage

You can create a `.github/workflows/go-live.yml` file:

```yaml
name: Go Live
on:
  pull_request:
    types: [opened]
jobs:
  go_live:
    runs-on: ubuntu-latest
    name: Go Live
    steps:
      - uses: AlbertHernandez/go-live-action@v1
        with:
          when_contain_labels: 'Merged in Beta;Tested in Beta'
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Name | Description | Required | Default Value |
|------|-------------|----------|---------------|
| when_contain_labels | Labels that should contain the PR to be merged in the main branch | true | |
