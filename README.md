<h1 align="center">🚀</h1>
<h3 align="center">is-ready-action</h3>

<p align="center">
    Check if the Pull Request is Ready to be Merged in the main branch.
</p>

## Usage

You can create a `.github/workflows/is-ready.yml` file:

```yaml
name: Is Ready
on: [pull_request]
jobs:
  go_live:
    runs-on: ubuntu-latest
    name: Is Ready
    steps:
      - uses: AlbertHernandez/is-ready-action@v1.0.0
        with:
          required_labels: 'Merged in Beta;Tested in Beta'
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Inputs

| Name | Description | Required | Default Value |
|------|-------------|----------|---------------|
| required_labels | Labels that should contain the PR to be merged in the main branch | true | |
