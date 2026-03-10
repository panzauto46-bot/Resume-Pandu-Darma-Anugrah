$repos = @("AEGIS-NET", "agent.os", "AnchorGuard-AI", "BIT-SHADOW", "CrediProcure", "CredPOS", "CredPOSappreview", "INPUT-DATA-LAPORAN-KERJA", "InstaDrop402web", "IPM-System", "OMNI-CORE-On-chain-Multi-agent-Neural-Interface-", "Resume-Pandu-Darma-Anugrah", "SatsProcure-atau-BtcInventory-", "SingularYield", "solana-stablecoin-standard", "SolForge-Academy", "SSS-Forge", "StableFlow", "StableFlowWeb", "superteam-academy", "Trading-Analytics-Dashboard", "VibeAgent", "VibeAgentWEB")

Remove-Item -Path all_readmes.txt -ErrorAction SilentlyContinue

foreach ($repo in $repos) {
    "==================================" | Out-File -FilePath all_readmes.txt -Append
    "REPO: $repo" | Out-File -FilePath all_readmes.txt -Append
    try {
        $content = Invoke-RestMethod -Uri "https://raw.githubusercontent.com/panzauto46-bot/$repo/main/README.md" -ErrorAction Stop
        $content | Out-File -FilePath all_readmes.txt -Append
    } catch {
        try {
            $content = Invoke-RestMethod -Uri "https://raw.githubusercontent.com/panzauto46-bot/$repo/master/README.md" -ErrorAction Stop
            $content | Out-File -FilePath all_readmes.txt -Append
        } catch {
            "No README found or error" | Out-File -FilePath all_readmes.txt -Append
        }
    }
}
