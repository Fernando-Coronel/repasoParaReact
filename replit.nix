{ pkgs }: {
  deps = [
    pkgs.nodejs-16_x
    pkgs.nodejs-12_x
		pkgs.nodePackages.prettier
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}